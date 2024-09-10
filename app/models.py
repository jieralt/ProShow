import json
from pathlib import Path

def load_works():
    data_file = Path(__file__).parent.parent / 'data' / 'works.json'
    with open(data_file, 'r', encoding='utf-8') as f:
        return json.load(f)