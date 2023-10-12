import json

def open_json_file(file_path):
    '''
    This function opens a JSON file and returns its contents.

    Args:
        file_path (str): The path to the JSON file.

    Returns:
        dict: The contents of the JSON file.
    '''
    with open(f'mockups/{file_path}', 'r') as file:
        data = json.load(file)
    return data
