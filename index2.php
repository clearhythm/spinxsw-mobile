<!DOCTYPE html>
<html>
  <head>
	  <meta charset="utf-8">
	  <title>SPINXSW</title>

	  <!-- Include JQuery -->
	  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>

	  <!-- Custom app JS and styles -->
	  <link rel="stylesheet" href="/style/app.css">
		<script type="text/javascript">
		$(document).ready(function(){
			console.log('foo');
			$('#link').click(function(){
 				// window.location.href = $('#link').attr('href');
				return true;
			});
			$('#link').trigger('click');
		});
		</script>
  </head>
  <body>
		<h1>Test</h1>
		<a id="link" href="index.php">This is a link</a>
	</body>
</html>
