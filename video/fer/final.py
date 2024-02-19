import os
import re

# ekhane url dite hobe
new_url = 'https://streamstv.org/nascar/?us'

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'rb') as file:
            content = file.read().decode('latin-1')

        new_content = re.sub(r'onerror= top.location.href=".*?">', f'onerror= top.location.href="{new_url}">', content)

        with open(filename, 'w', encoding='latin-1') as file:
            file.write(new_content)

        print(f"Updated {filename} with the new URL.")
