<?php include('partials/before.php'); ?>
    <header class="bar bar-nav">
      <a href="#popover"><h2 class="title">SPINXSW <span class="icon icon-caret"></span></h2></a>
    </header>
		<div id="popover" class="popover">  
		  <header class="bar bar-nav">
		    <!-- <h1 class="title">Game Paused</h1> -->
		    <h1 class="title">Controls</h1>
		  </header>
		  <ul class="table-view">
		    <li class="table-view-cell"><a href="home.php" transition="slide-in">Exit to Menu</a></li>
		  </ul>
		</div>
    <div class="content">
			<div class="play-active">
				<div class="tip">
					<h2>Shake<br>Your<br>Phone</h2>
					<p>To create patterns<br>on the globe!</p>
			    <p id="textOutput1"></p>
			    <p id="textOutput2"></p>
			    <p id="textOutput3"></p>
				</div>
			</div>
		</div>
<?php include ('partials/after.php'); ?>