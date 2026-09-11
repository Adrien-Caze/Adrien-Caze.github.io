from PIL import Image

image = Image.open("RPG_GODOT_ICO.png")
image = image.resize((300, 400))
image.save("RPG_GODOT_ICO.png")