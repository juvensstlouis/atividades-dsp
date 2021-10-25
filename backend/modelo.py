from config import *

class Produto(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.String(300))
    preco = db.Column(db.Float)

    def __str__(self):
        return f"id: {self.id}" + \
               f", descrição: {self.descricao}" + \
               f", preço: R$ {self.preco:.2f}"

    def json(self):
        return {
            "id": self.id,
            "descricao": self.descricao,
            "preco": self.preco
        }

if __name__ == "__main__":

    if os.path.exists(arquivobd):
        os.remove(arquivobd)

    db.create_all()

    p1 = Produto(descricao = "Leite em pó", preco=50)
    p2 = Produto(descricao = "Nescau", preco=20.99)
    p3 = Produto(descricao = "Snow Flakes", preco=16.85)

    produtos = [p1, p2, p3]

    db.session.add_all(produtos)
    db.session.commit()

    for p in produtos:
        print(p)
        print(p.json())
        print()




