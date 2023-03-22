from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property


# Shared Database (db) for models and tables in seperated .py files.
# models.__init__.py imports db and other Flask-SQLAlchemy Models and
# then the main __init__.py for the app will import * (all) from app.models.


db = SQLAlchemy()
