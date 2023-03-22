from backend_app.models.db import db

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_path = db.Column(db.String)
    name = db.Column(db.String(128))
    category = db.Column(db.String(128))
    size = db.Column(db.String(128))
    toppings = db.Column(db.String(128))
    description = db.Column(db.string(128))
    price = db.Column(db.Integer)

    def __str__(self):
        return self.name



