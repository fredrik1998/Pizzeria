import os
import random
import string
from flask import *
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import request
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, create_refresh_token, JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
file_path = os.path.abspath(os.getcwd())+"\database.db"
import json
import stripe

load_dotenv()
app = Flask(__name__, static_folder='frontend/dist', static_url_path='/')
stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY')
app.config['UPLOAD_FOLDER'] = os.path.join(BASE_DIR, "frontend", "public")
app.config['ALLOWED_EXTENSIONS'] = {'png', 'img' 'webp'}
jwt = JWTManager(app)
db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)
cors = CORS()
cors.init_app(app)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

import secrets
jwt_secret_key = secrets.token_hex(32)
print(jwt_secret_key)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

@app.route('/static/images/<path:path>')
def send_static(path):
    return send_from_directory('static/images', path)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

class Menu(db.Model):
    __tablename__ = "menu"
    id = db.Column(db.Integer, primary_key=True)
    image_path = db.Column(db.String)
    name = db.Column(db.String(128))
    category = db.Column(db.String(128))
    size = db.Column(db.String(128))
    toppings = db.Column(db.String(128))
    description = db.Column(db.String(128))
    price = db.Column(db.Integer)
    countInStock = db.Column(db.Integer)

    @staticmethod
    def create_pizza(image_path, name, category, size, toppings, description, price, countInStock):
        pizza = Menu(image_path=image_path, name=name, category=category, size=size, toppings=toppings, description=description, price=price, countInStock=countInStock)
        db.session.add(pizza)
        db.session.commit()

@app.before_first_request
def create_table():
    db.create_all()
    create_pizzas()

def create_pizzas():
    if not Menu.query.first():
        Menu.create_pizza(image_path='margarita.jpg', name='Margherita', category='Pizza', size='Medium', toppings='Tomatoes, basil, mozzarella', description='Classic Italian pizza with tomato sauce, mozzarella cheese, and basil', price=10, countInStock=10)
        Menu.create_pizza(image_path='pepperoni.jpg', name='Pepperoni', category='Pizza', size='Medium', toppings='Tomato sauce, mozzarella, pepperoni', description='Pizza with tomato sauce, mozarella cheese and pepperoni', price=11, countInStock=10)
        Menu.create_pizza(image_path='hawaii.webp', name='Hawaii', category='Pizza', size='Medium',toppings='Tomato sauce, mozzarella, ham, pineapple', description='Pizza with tomato sauce, mozarella cheese, ham and pineapple', price=11, countInStock=10)
        Menu.create_pizza(image_path='Vegetarian.jpg', name='Vegetarian', category='Pizza', size='Medium', toppings='Tomato sauce, mozzarella, mushrooms, olives, peppers', description='Delicious Vegetarian pizza with tomato sauce, mozarella cheese, mushrooms, olives and peppers', price=11, countInStock=10)
        Menu.create_pizza(image_path='seafood.jpg', name='Seafood', category='Pizza', size='Medium', toppings='Tomato sauce, mozzarella, shrimp, crab, tuna', description='Delicious seafood pizza with tomato sauce, mozarella cheese, fresh shrimp, crab and tuna', price=12, countInStock=10)
        Menu.create_pizza(image_path='pizza.jpg', name='Carbonara', category='Pizza' , size='Medium', toppings='Tomato sauce, mozzarella, bacon, egg', description='Italian pizza with tomato sauce, mozarella cheese, bacon and egg', price=12, countInStock=10)
        Menu.create_pizza(image_path='quattrostagoni.jpg', name='Quattro Stagioni', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, ham, mushrooms, artichokes, olives', description='Classic Italian pizza based of the four seasons with tomato sauce, mozarella cheese, ham, mushrooms, artichokes and olives', price=12, countInStock=10)
        Menu.create_pizza(image_path='pizza.webp', name='Quattro Formaggi', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, gorgonzola, parmesan, emmental', description='Classic Italian pizza with four cheeses with tomato sauce, mozarella, gorgonzola, parmesan, emmental', price=12, countInStock=10)
        Menu.create_pizza(image_path='Napoli.webp', name='Napoli', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, anchovies, capers', description='Italian pizza with tomato sauce, mozarella cheese, anchovies and capers', price=13, countInStock=10)
        Menu.create_pizza(image_path='Calzone.jpg', name='Calzone', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, ham, mushrooms, peppers', description='Classic folded Italian pizza with tomato sauce, mozarella cheese, ham, mushrooms and peppers', price=13, countInStock=10)

class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    customer_name = db.Column(db.String(80), nullable=False)
    customer_email = db.Column(db.String(120), nullable=False)
    customer_phone = db.Column(db.String(20), nullable=False)
    items = db.Column(db.String(1000), nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    

    user = db.relationship("User", back_populates="orders")

    @classmethod
    def create_order(cls, user_id, customer_name, customer_email, customer_phone, items, total_price):
        items_json = json.dumps(items)
        order = cls(user_id=user_id, customer_name=customer_name, customer_email=customer_email, customer_phone=customer_phone, items=items_json, total_price=total_price)
        db.session.add(order)
        db.session.commit()
        return order

class User(db.Model):
    __tablename__= "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    is_superuser = db.Column(db.Boolean, default = False)

    orders = db.relationship("Order", back_populates="user")

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    @classmethod
    def create_superuser(cls, username, email, password):
        user= cls(username=username, email=email)
        user.set_password(password)
        user.is_superuser = True
        db.session.add(user)
        db.session.commit()
        print(f'Superuser {username} has been created.')
    
@app.route('/api/menu', methods=['GET'])
def get_menu():
    pizzas = Menu.query.all()
    menu_dict = {"menu": []}
    for pizza in pizzas:
        menu_dict["menu"].append({
            "id": pizza.id,
            "image_path": pizza.image_path.replace("/static/images/", ""),
            "name": pizza.name,
            "category": pizza.category,
            "size": pizza.size,
            "toppings": pizza.toppings,
            "description": pizza.description,
            "price": pizza.price,
            "countInStock": pizza.countInStock,
        })
    return jsonify(menu_dict)


@app.route('/api/menu/<int:id>', methods=['GET'])
def get_pizza_by_id(id):
    pizza = Menu.query.get_or_404(id)
    pizza_dict = {
        "id": pizza.id,
        "image_path": pizza.image_path.replace("/static/images/", ""),
        "name": pizza.name,
        "category": pizza.category,
        "size": pizza.size,
        "toppings": pizza.toppings,
        "description": pizza.description,
        "price": pizza.price,
        "countInStock": pizza.countInStock,
    }
    return jsonify(pizza_dict)


@app.route('/api/menu/add', methods=['POST'])
def add_pizza():
    name = request.form['name']
    category = request.form['category']
    size = request.form['size']
    toppings = request.form['toppings']
    description = request.form['description']
    price = request.form['price']
    countInStock = request.form['countInStock']

    image_file = request.files.get('image')
    if image_file:
        filename = secure_filename(image_file.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image_file.save(image_path)
        relative_image_path = f"/{filename}"
    else:
        relative_image_path = f"/{filename}"

    new_pizza = Menu(
        name=name,
        category=category,
        size=size,
        toppings=toppings,
        description=description,
        price=price,
        countInStock=countInStock,
        image_path=relative_image_path
    )

    db.session.add(new_pizza)
    db.session.commit()

    pizza_dict = {
        "id": new_pizza.id,
        "image_path": new_pizza.image_path,
        "name": new_pizza.name,
        "category": new_pizza.category,
        "size": new_pizza.size,
        "toppings": new_pizza.toppings,
        "description": new_pizza.description,
        "price": new_pizza.price,
        "countInStock": new_pizza.countInStock,
    }
    return jsonify(pizza_dict), 201


@app.route('/api/menu/update/<int:id>', methods=['PUT'])
def update_pizza(id):
    pizza = Menu.query.get_or_404(id)

    if 'image' in request.files:
        file = request.files['image']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            pizza.image_path = f"/{filename}"

    pizza.name = request.form.get('name', pizza.name)
    pizza.category = request.form.get('category', pizza.category)
    pizza.size = request.form.get('size', pizza.size)
    pizza.toppings = request.form.get('toppings', pizza.toppings)
    pizza.description = request.form.get('description', pizza.description)
    pizza.price = request.form.get('price', pizza.price)
    pizza.countInStock = request.form.get('countInStock', pizza.countInStock)
    pizza.image_path = request.form.get('image_path', pizza.image_path)

    db.session.commit()

    pizza_dict = {
        "id": pizza.id,
        "image_path": pizza.image_path,
        "name": pizza.name,
        "category": pizza.category,
        "size": pizza.size,
        "toppings": pizza.toppings,
        "description": pizza.description,
        "price": pizza.price,
        "countInStock": pizza.countInStock,
    }
    return jsonify(pizza_dict), 200


@app.route('/api/menu/delete/<int:id>', methods=['DELETE'])
def delete_pizza(id):
    pizza = Menu.query.get_or_404(id)
    
    db.session.delete(pizza)
    db.session.commit()
    
    return jsonify({"message": f"Pizza with ID {id} was deleted successfully."}), 200

@app.route('/api/order/add', methods=['POST'])
def add_order():
    data = request.get_json()
    user_id = data.get('userId')
    if not user_id:
        user_id = None
    customer_name = request.json['customer_name']
    customer_email = request.json['customer_email']
    customer_phone = request.json['customer_phone']
    items = request.json['items']
    total_price = request.json['total_price']
    for item in items:
        pizza = Menu.query.get(item['id'])
        pizza.countInStock -= item['quantity']
        db.session.add(pizza)  
    db.session.commit() 
    created_order = Order.create_order(user_id=user_id, customer_name=customer_name, customer_email=customer_email, customer_phone=customer_phone, items=items, total_price=total_price)
    return jsonify({"message": "Order created successfully.", "orderId": created_order.id}), 201


@app.route('/api/order/<int:orderId>', methods=['GET'])
def get_order(orderId):
    order = Order.query.get(orderId)
    if order:
        items_data = json.loads(order.items)

        order_data = {
            'id': order.id,
            'customer_name': order.customer_name,
            'customer_email': order.customer_email,
            'customer_phone': order.customer_phone,
            'items': items_data,
            'total_price': order.total_price,
        }
        return jsonify(order_data), 200
    else:
        return jsonify({"error": "Order not found"}), 404
    
@app.route('/api/orders', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    orders_data = []
    for order in orders:
        items_data = json.loads(order.items)

        order_data = {
            'id': order.id,
            'customer_name': order.customer_name,
            'customer_email': order.customer_email,
            'customer_phone': order.customer_phone,
            'items': items_data,
            'total_price': order.total_price,
        }
        orders_data.append(order_data)
    return jsonify(orders_data), 200

@app.route('/api/orders/user/<int:userId>', methods=['GET'])
def get_orders_by_user_id(userId):
    orders = Order.query.join(User, User.id == Order.user_id).filter(User.id == userId).all()
    orders_data = []
    for order in orders:
        items_data = json.loads(order.items)

        order_data = {
            'id': order.id,
            'customer_name': order.customer_name,
            'customer_email': order.customer_email,
            'customer_phone': order.customer_phone,
            'items': items_data,
            'total_price': order.total_price,
        }
        orders_data.append(order_data)
    return jsonify(orders_data), 200


@app.route('/api/create_payment', methods=['POST'])
def create_payment():
    try:
        # Get the payment amount and description from the request
        amount = request.json['total_price']
        
        # Convert the amount to cents
        amountInCents = amount * 100
    
        # Create a new payment intent
        intent = stripe.PaymentIntent.create(
            amount=amountInCents,
            currency='usd',
            payment_method_types=['card'],
        )

        return jsonify({'client_secret': intent.client_secret}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email_or_username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not email_or_username or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    user = User.query.filter_by(email=email_or_username).first()
    
    if user is None:
        user = User.query.filter_by(username=email_or_username).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=user.username)
        response_data = {
            'access_token': access_token,
            'username': user.username,
            'is_superuser': user.is_superuser == 1,
            'userId': user.id,
        }
        return jsonify(response_data), 200

    return jsonify({"msg": "Bad username or password"}), 401


    
@app.route('/api/register', methods=['POST'])
def register():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not username or not email or not password:
        return jsonify({"msg": "Missing username, email, or password"}), 400

    existing_user_email = User.query.filter_by(email=email).first()
    existing_user_username = User.query.filter_by(username=username).first()

    if existing_user_email or existing_user_username:
        return jsonify({"msg": "Email or username already taken"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)
    return jsonify(access_token=access_token, msg="User created"), 201

@app.route('/')
@app.route('/menu')
@app.route('/order')
@app.route('/success/<orderId>')
@app.route('/login')
@app.route('/admin')
@app.route('/register')
@app.route('/userscreen/<userId>')
def serve_index(orderId=None, userId=None):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

