<script>
	// Function to copy server address
	function copyLink(text, btn) {
		const originalText = btn.textContent;
		navigator.clipboard.writeText(text).then(
			() => {
				btn.textContent = 'Скопійовано!';
				setTimeout(() => {
					btn.textContent = originalText;
				}, 2000); // Revert back after 2 seconds
			},
			(err) => {
				console.error('Could not copy text: ', err);
			}
		);
	}
</script>

<h1>Medcraft Server: Prepare to die Edition</h1>
<p>Here are the servers you can join:</p>
<ul>
	<li>
		Bedrock, Android, iOS (45.131.182.91:19132)
		<button on:click={() => copyLink('45.131.182.91:19132', this)}> Копіювати </button>
		<p>
			Якщо знадобиться:
			<a href="https://aka.ms/remoteconnect">aka.ms/remoteconnect</a>
		</p>
	</li>
	<li>
		Vanilla/Java Edition (45.131.182.91:25565)
		<button on:click={() => copyLink('45.131.182.91:25565', this)}> Копіювати </button>
		<p>
			Поміняти скін онлайн можна на сайті Minecraft.net:
			<a href="https://www.minecraft.net/en-us/msaprofile/mygames/editskin"> Change Skin </a>
		</p>
	</li>
</ul>
<p>Here are some other useful links:</p>
<ul>
	<li><a href="http://kharchenko.work:23333">Admin Console</a></li>
	<li><a href="http://kharchenko.work:8123">Web Map</a></li>
</ul>

<style>
	/* Minecraft-style CSS */
	body {
		background-color: #252525;
		font-family: 'Press Start 2P', cursive; /* Pixelated font similar to Minecraft's */
		color: #ffffff;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	h1 {
		background-color: #3c5d33; /* Darker grass block shade */
		margin: 0;
		padding: 20px;
		border-bottom: 4px solid #263d22; /* Grass block side color */
	}

	p,
	ul {
		font-family: Arial, sans-serif; /* More readable font for longer texts */
	}

	li {
		background-color: #555555; /* Stone block color */
		list-style: none;
		margin: 5px;
		padding: 10px;
		border: 2px solid #333333; /* Stone block edge */
	}

	a {
		color: #dddddd; /* Light text for readability */
		text-decoration: none;
		font-weight: bold;
	}

	a:hover {
		color: #ffffff;
	}

	ul {
		padding: 0;
	}
	button {
		color: #fff;
		border: 2px solid #3d3938;
		box-shadow:
			0 4px 0 rgba(0, 0, 0, 0.25),
			inset 0 6px 0 #86d562,
			inset 0 -6px 0 #2a641c;
		text-shadow: 0 1px 0 #2a631c;
		outline: 0;
		background-color: #3c8527;
		font-size: 18px;
		letter-spacing: 0.03em;
		line-height: 16px;
		height: 52px;
		min-width: 190px;
		text-transform: uppercase;
		text-align: center;
		margin-left: 5px;
		margin-right: 5px;
		cursor: pointer;
		font-style: normal;
		font-weight: 700;
	}
	button:hover {
		color: #fff;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #3c8527;
		box-shadow:
			0 4px 0 rgba(0, 0, 0, 0.25),
			inset 0 6px 0 #86d562,
			inset 0 -6px 0 #2a641c;
	}
</style>
