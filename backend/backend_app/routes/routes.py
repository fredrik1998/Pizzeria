from flask import render_template, redirect, url_for, request, session, flash, jsonify, make_response
from backend_app import app, db, User, OtherModel


@app.route('/', methods=['POST', 'GET'])
@app.route('/home', methods=['POST', 'GET'])
def index():
	if request.method == 'POST':
		print(request.form)
		print(request.files)
	return render_template('index.html')


@app.route('/bootstrap_<bs_page>')
def bootstrap(bs_page):
	return render_template(f'bootstrap/{bs_page}.html')


# Asynchronous route using the Fetcher Object in static/js/fetcher.js
# Customize this object for use in your application
@app.route('/fetcher', methods=['POST'])
def fetcher():
	post = request.get_json()
	print('fetcher post = ', post)
	response = make_response(jsonify({'message': 'good response', 'data': {'hello': True, 'world': [1, 2, 3]}}), 200)
	return response
