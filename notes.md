> Reminder: "You can use the contents of this file while taking the midterm and final exam."

> Reminder: "⚠ IMPORTANT: It is a prerequisite for all deliverables that you have at least 10 commits evenly spread across the assignment period for the deliverable."

# GitHub & Git

Git provides:

1. "version tracking in a repository"
2. "the ability to clone a copy of the repository to a different location"

The **"push"** command sends local changes up to the GitHub repository so both are in sync.  The **"pull"** command allows for others to pull down commits into their local repositories.  The **"fetch"** command give you the most recent information on GitHub without modifying your local repository.  The **"status"** command shows differences between clones and any missing commits.  

## forking
- "A fork is similar to cloning a repository to your development environment, but it clones to GitHub instead."
* "GitHub allows you to create a fork of any repository on GitHub. You just push the Fork button from the repository's GitHub page. You can then make modifications to the repository fork and push the changes as a pull request."


# The Console
## Command Line Crash Course Info

CLI tools: command line interface tools

CMD: the command prompt

WSL: Windows Subsystem for Linux

Terminal: "a software that starts and connects to a shell"

Shell: "your session and session environment"

The Command Line: "the literal line where you enter commands and the cursor blinks"

### Some Useful commands
- cd: move around directory
- ls: list a directory's contents
- pwd: show present working directory
- mkdir: make a directory
- touch: create files and modify metadata
- cp: copy files or directories
- mv: move files or directories
- rm: delete files or directories
- curl: download files found at a URL
- grep: search for text
- less, cat: view a file's contents
- awk, tr, sed: transform text

Command options are "modifiers" placed at the end of a command.

### Special Characters
- "|": pass in the command on the left to the command on the right
- ">": redirect output to a file (overwrites)
- ">>" redirect output to a file (creates new, if exists)
### Keyboard Shortcuts
CTRL-R: "use type ahead to find previous commands"

CTRL-C: terminate the current command

# Amazon Web Services - EC2

- "A security group represents the rules for allowing access to your servers. Security group rules specify both the port that is accessible on your server, and the source IP address that requests are allowed from."
- "You can stop your server at any time. Don't confuse this with terminating your server which completely destroys it. Stopping your server just powers down the device."
  > Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.
  
  how to remote shell into the server:

  >  ssh -i [key pair file] ubuntu@[ip address]
