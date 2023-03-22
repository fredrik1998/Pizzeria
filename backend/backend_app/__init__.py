from flask import Flask
# from flask_login import ()
# from flask_mail import ()
# from flask_wft import ()
# from flask_debugtoolbar import ()
from backend_app.config.app_config import *
from backend_app.models import *


app = Flask(__name__)
app.config['SECRET_KEY'] = SECRET_KEY

# SQLAlchemy Config
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Flask Mail Config
# app.config['MAIL_SERVER'] = ''	# Your Mail Server (ex. 'smtp.zoho.com')
# app.config['MAIL_PORT'] = ''	# Your Mail Port (ex. 465)
# app.config['MAIL_USE_SSL'] = ''	# Using SSL? (True/False)
# app.config['MAIL_USE_TLS'] = ''	# Using TLS? (True/False)
# app.config['MAIL_USERNAME'] = ''	# Your Mail Email Address (ex. 'admin@yourcompany.com')
# app.config['MAIL_PASSWORD'] = ''	# Your Mail Password
# app.config['MAIL_DEFAULT_SENDER'] = ''	# Your Mail Default Sender (ex. 'admin@yourcompany.com')

# Other Config
# app.config[''] = ''
# app.config[''] = ''

# Use this bool to control your app debug state, run.py will import this
DEBUG = True


with app.app_context():
	db.init_app(app)
	# db.create_all()


from backend_app.routes import routes
