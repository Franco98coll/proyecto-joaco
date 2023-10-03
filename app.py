import pandas as pd
import json

# Ruta del archivo Excel en la carpeta Downloads
direccion = r'C:\Users\FRAN\Desktop\pyton joaco\bd.xlsx'

# Lee el archivo Excel y carga la hoja 'GENERAL' en un DataFrame
datos_df = pd.read_excel(direccion, sheet_name='GENERAL')

# Convierte los datos del DataFrame a un diccionario
datos_dict = datos_df.to_dict(orient='records')

# Guarda el diccionario como un archivo JSON
ruta_json = 'datos.json'
with open(ruta_json, 'w', encoding='utf-8') as json_file:
    json.dump(datos_dict, json_file, ensure_ascii=False, indent=4)

print(f"Archivo JSON guardado en: {ruta_json}")
