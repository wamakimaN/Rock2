from app import create_app
from flask_script import Manager, Server
# create app instance
app = create_app('development')

manager = Manager(app)
manager.add_command('server',Server)

@manager.shell
def make_shell_context():
    return dict(db = db,User = User)

if __name__=='__main__':
    manager.run()