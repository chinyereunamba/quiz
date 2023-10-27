import google.generativeai as palm

def get_questions(key: str, no: int, description: str):
    palm.configure(api_key=key)
    models = [
        m
        for m in palm.list_models()
        if "generateText" in m.supported_generation_methods
    ]
    model = models[0].name

    prompt = f"""
    create a multichoice quiz with {no} questions and their answers based on with no snippets {description} strictly in the format
    1. the question
    A. ...
    B. ...
    C. ...
    D. ...

    The answer ...
    ...


    """

    completion = palm.generate_text(
        model=model,
        prompt=prompt,
        temperature=0,
        # The maximum length of the response
        max_output_tokens=800,
    )

    return completion.result
