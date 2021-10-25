from config import *
from modelo import Produto

@app.route("/")
def home():
    return redirect(url_for("listar_produtos"))

@app.route("/listar_produtos")
def listar_produtos():
    produtos = db.session.query(Produto).all()
    produtos_em_json = [p.json() for p in produtos]
    
    resposta = jsonify(produtos_em_json)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    
    return resposta

app.run(debug=True)