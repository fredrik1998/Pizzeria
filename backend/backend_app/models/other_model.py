from datetime import datetime
from backend_app.models.db import db, datetime


# Other Example Model
# When creating more Models in separate python files, go to <app>.models.__init__.py and import the new model to there.
# The main __init__.py for the app will import * (all) from <app>.models.__init__.py 


class OtherModel(db.Model):
	__tablename__ = 'other_model'
	id = db.Column(db.Integer, primary_key=True)
	date_created = db.Column(db.DateTime, nullable=False, default=datetime.now())
