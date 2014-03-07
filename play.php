<?php include('partials/before.php'); ?>
    <header class="bar bar-nav">
      <a href="#popover"><h2 class="title">SPINXSW <span class="icon icon-caret"></span></h2></a>
    </header>
    <div class="bar bar-standard bar-header-secondary">
      <div class="color_block hide"><h3>You're Player: <span class="my_color">red</span></h3></div>
    </div>
		<div id="popover" class="popover">  
		  <header class="bar bar-nav">
		    <h1 class="title">Game Paused</h1>
		  </header>
		  <ul class="table-view">
		    <li class="table-view-cell">Resume Play</li>
		    <a href="home.php" transition="slide-in"><li class="table-view-cell">Exit Game</li></a>
		  </ul>
		</div>
    <div class="content">
			<div class="play">
				<h2>Pick Your Color</h2>
				<ul class="colors">
					<li class="selected red">&nbsp;</li>
					<li class="magenta">&nbsp;</li>
					<li class="orange">&nbsp;</li>
					<li class="yellow">&nbsp;</li>
					<li class="green">&nbsp;</li>
					<li class="mint">&nbsp;</li>
					<li class="aqua">&nbsp;</li>
					<li class="blue">&nbsp;</li>
					<li class="purple">&nbsp;</li>
				</ul>
			</div>
			<div class="play-active hide">
				<div class="countdown">
					<h2 id="countdown"></h2>
				</div>
				<div class="tip hide">
					<h2>Play!</h2>
					<p>Find your color<br>on the globe</p>
				</div>
				<div class="scored hide">
					<h2>+50<span class="pts">pts</span></h2>
					<h3>&#8220;Around the World&#8221;</h3>
					<p>Complete 1 full loop around a ring</p>
				</div>
				<div class="tipz hide">
					<h2>Final<br>Minute</h2>
				</div>
				<div class="tipz hide">
					<h2>Game<br>Over</h2>
				</div>
			</div>
			<div class="bar bar-standard bar-footer">
			  <a id="play_as" class="btn btn-block">PLAY AS <span class="my_color">red</span></a>
			</div>
			<div class="bar bar-standard bar-footer bar-footer-play hide">
			  <table>
					<thead>
						<tr>
							<th><span id="timer_min">3</span>:<span id="timer_sec">00</span></th>
							<th>0</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Time</td>
							<td>Score</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
<?php include ('partials/after.php'); ?>