from hashlib import sha256
from sqlalchemy.types import TypeDecorator, String


# Here you can create custom Column Datatypes for Flask-SQLAlchemy Models


class Name(TypeDecorator):
	impl = String(128)  # The implied class type from SQLAlchemy

	def process_bind_param(self, value, dialect):
		#This method will process the value upon creation and can transform it before inserting into database
		return value.lower().capitalize()

	def process_result_value(self, value, dialect):
		#This method will process the value upon loading and can transform it before the Model attribute is set
		return value


class Password(TypeDecorator):
	impl = String(64)  # The implied class type from SQLAlchemy

	def process_bind_param(self, value, dialect):
		#This method will process the value upon creation and can transform it before inserting into database
		return sha256(value.encode('utf-8')).hexdigest()

	def process_result_value(self, value, dialect):
		#This method will process the value upon loading and can transform it before the Model attribute is set
		return value

	

