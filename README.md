# DECO3801-oblong
Team repo for DECO3801 Build project

Have a try contributing to this git repo as a team.

1. Download / install git, open git bash (or you can use github desktop if you prefer)

2. Open git bash and navigate to a fresh folder

3. Clone this repo:
`git clone https://github.com/trisbsamson/DECO3801-oblong.git`
	
4. Switch to the develop branch
`git checkout develop`
	
5. Create a new branch in the local repository for whatever feature you're working on at the moment. (replace add_name_tristan with your branch name)
`git branch add_name_tristan`

6. Switch to this new branch
`git checkout add_name_tristan`

7. Push this new branch up to the origin
`git push -u origin add_name_tristan`

8. Make a change to the main.py file

9. Stage the changes to be commmited
`git add main.py`

10. Commit the changes
`git commit -m "Commit message goes here"`

11. Push the changes to the origin repo on github (I think this step can be fixed if it's a small feature)
`git push`
	
12. Change back into the develop branch
`git checkout develop`

13. Merge your feature branch with the develop branch. There shouldn't be any conflicts with this test example but there may be in the future.
`git merge add_name_tristan`

14. Push this back to the origin repo
`git push`
	
15. Delete this feature branch from the remote if you're done with it
`git push origin --delete add_name_tristan`

Your modifications should now be in the develop branch along with everyone elses. We may want to modify this workflow a little when we work on our actual project,
use pull requests and stuff like that.
