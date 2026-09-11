from PIL import Image

image = Image.open("LOTR_Kotlin.png")
image = image.resize((300, 400))
image.save("LOTR_Kotlin.png")