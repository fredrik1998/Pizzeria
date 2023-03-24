import os
from flask import *
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import request
file_path = os.path.abspath(os.getcwd())+"\database.db"
 

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+file_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy()
db.init_app(app)
cors = CORS()
cors.init_app(app)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

@app.route('/static/images/<path:path>')
def send_static(path):
    return send_from_directory('static/images', path)

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
        Menu.create_pizza(image_path='pizza.webp', name='Quattro Formaggi', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, gorgonzola, parmesan, emmental', description='Classic Italian pizza with four cheeses with tomato sauce, mozarella, gorgonzola, parmesan, emmental', price=12)
        Menu.create_pizza(image_path='Napoli.webp', name='Napoli', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, anchovies, capers', description='Italian pizza with tomato sauce, mozarella cheese, anchovies and capers', price=13, countInStock=10)
        Menu.create_pizza(image_path='Calzone.jpg', name='Calzone', category='Pizza', size='Large', toppings='Tomato sauce, mozzarella, ham, mushrooms, peppers', description='Classic folded Italian pizza with tomato sauce, mozarella cheese, ham, mushrooms and peppers', price=13, countInStock=10)
    

class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(128))
    customer_email = db.Column(db.String(128))
    customer_phone = db.Column(db.String(128))
    items = db.Column(db.String(1024))
    total_price = db.Column(db.Integer)

    @staticmethod
    def create_order(customer_name, customer_email, customer_phone, items, total_price):
        order = Order(customer_name=customer_name, customer_email=customer_email, customer_phone=customer_phone, items=items, total_price=total_price)
        db.session.add(order)
        db.session.commit()

@app.route('/api/menu', methods=['GET'])
def get_menu():
    pizzas = Menu.query.all()
    menu_dict = {"menu": []}
    for pizza in pizzas:
        menu_dict["menu"].append({
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

from flask import request

@app.route('/api/menu/add', methods=['POST'])
def add_pizza():
    new_pizza = Menu(
        image_path=request.json['image_path'],
        name=request.json['name'],
        category=request.json['category'],
        size=request.json['size'],
        toppings=request.json['toppings'],
        description=request.json['description'],
        price=request.json['price'],
        countInStock=request.json['countInStock']
    )
    
    db.session.add(new_pizza)
    db.session.commit()
    
    pizza_dict = {
        "id": new_pizza.id,
        "image_path": new_pizza.image_path.replace("/static/images/", ""),
        "name": new_pizza.name,
        "category": new_pizza.category,
        "size": new_pizza.size,
        "toppings": new_pizza.toppings,
        "description": new_pizza.description,
        "price": new_pizza.price,
        "countInStock": new_pizza.countInStock,
    }
    return jsonify(pizza_dict), 201

@app.route('/api/menu/delete/<int:id>', methods=['DELETE'])
def delete_pizza(id):
    pizza = Menu.query.get_or_404(id)
    
    db.session.delete(pizza)
    db.session.commit()
    
    return jsonify({"message": f"Pizza with ID {id} was deleted successfully."}), 200

@app.route('/api/order/add', methods=['POST'])
def add_order():
    customer_name = request.json['customer_name']
    customer_email = request.json['customer_email']
    customer_phone = request.json['customer_phone']
    items = request.json['items']
    total_price = request.json['total_price']
    for item in items:
        pizza = Menu.query.get(item['id'])
        pizza.countInStock -= item['quantity']
        db.session.add(pizza) # add pizza object to session for updating
    db.session.commit() # commit all changes to the database
    Order.create_order(customer_name=customer_name, customer_email=customer_email, customer_phone=customer_phone, items=items, total_price=total_price)
    return jsonify({"message": "Order created successfully."}), 201

if __name__ == '__main__':
    app.run(debug=True)
