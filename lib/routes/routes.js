Router.configure({
	layoutTemplate: 'main_layout'
});

Router.route('/jokes', function () {
  this.render('jokes');
});

Router.route('/signup', function () {
  this.render('signup');
});

Router.route('/', function () {
  this.render('login');
});