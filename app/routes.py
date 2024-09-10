from flask import Blueprint, render_template
from app.models import load_works

# 创建一个蓝图
main = Blueprint('main', __name__)

@main.route('/')
def index():
    works = load_works()
    categories = sorted(set(work['category'] for work in works))
    return render_template('index.html', works=works, categories=categories)

@main.route('/work/<int:work_id>')
def work_detail(work_id):
    works = load_works()
    work = next((w for w in works if w['id'] == work_id), None)
    if work:
        return render_template('work_detail.html', work=work)
    return "作品未找到", 404