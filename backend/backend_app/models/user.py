from backend_app.models.db import db, datetime, hybrid_property
from backend_app.models.datatypes import Name, Password


# Example User Model
# When creating more Models in separate python files, go to <app>.models.__init__.py and import the new model to there.
# The main __init__.py for the app will import * (all) from <app>.models.__init__.py 


class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	date_created = db.Column(db.DateTime, nullable=False, default=datetime.now())
	first_name = db.Column(Name)  # From datatypes.py - Custom datatype which will capitalize the name upon creation
	last_name = db.Column(Name)  # From datatypes.py - Custom datatype which will capitalize the name upon creation
	email = db.Column(db.String(128))
	username = db.Column(db.String(64), unique=True)
	password = db.Column(Password)  # From datatypes.py - Custom datatype which will convert password to sha256 hexdigest

	@hybrid_property
	def full_name(self):
		return f'{self.first_name} {self.last_name}'
