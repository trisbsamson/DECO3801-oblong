# DECO3801-oblong
Team repo for DECO3801 Build project

Have a try contributing to this git repo as a team.

1. Download / install git, open git bash (or you can use github desktop if you prefer)

2. Open git bash and navigate to a fresh folder

3. Clone this repo:
```bash
git clone https://github.com/trisbsamson/DECO3801-oblong.git
```
	
4. Switch to the develop branch
```bash
git checkout develop
```

5. Create a new branch in the local repository for whatever feature you're working on at the moment. (replace <branch-name> with your branch name)
```bash
git branch <branch-name>
```

6. Switch to this new branch
```bash
git checkout <branch-name>
```

7. Push this new branch up to the origin
```bash
git push -u origin <branch-name>
```

8. Make a change to the main.py file

9. Stage the changes to be commmited
```bash
git add main.py
```

10. Commit the changes
```bash
git commit -m "Commit message goes here"
```

11. Push the changes to the origin repo on github (I think this step can be fixed if it's a small feature)
```bash
git push
```
	
12. Change back into the develop branch
```bash
git checkout develop
```

13. Merge your feature branch with the develop branch. There shouldn't be any conflicts with this test example but there may be in the future.
```bash
git merge <branch-name>
```

14. Push this back to the origin repo
```bash
git push
```
	
15. Delete this feature branch from the remote if you're done with it
```bash
git push origin --delete <branch-name>
```

Your modifications should now be in the develop branch along with everyone elses. We may want to modify this workflow a little when we work on our actual project,
use pull requests and stuff like that.
