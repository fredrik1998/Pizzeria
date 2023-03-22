# Import all Flask-SQLAlchemy Models to here and then the main __init__.py will import * (all) from here


from backend_app.models.db import db
from backend_app.models.user import User
from backend_app.models.other_model import OtherModel
from backend_app.models.menu import Menu
