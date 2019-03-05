<img src="https://github.com/tahtaciburak/sourcebin/blob/master/img/logo.png" width="240">

# [SourceBin](http://sourcebin.tk/)


SourceBin is an open-source pastebin alternative written in node.js, which can used in private networks.
You can share texts inside the company in very easy and secure way. SourceBin is very lightweight and easy to install
on any platform. It doesn't require too much resources and it just works. You can also share texts that encrypted with a key
and you can set an expiration time to your pastes.

<img src="http://g.recordit.co/r7d89Gqw35.gif">

## Features
1. Encryption : Encrypt your texts by using an encryption algorithm and share your sources in a secure way. 
2. Expiration : Your texts will disappear and removed when expired.
3. Syntax Highlighting: (On-Development)

## CLI Tool

It's easy to share files that are located in your linux file system by using a command line utility called sourcebin-client. For example when you want to share a file you can run this command:
```
cat /path/to/file.txt | sourcebin
cat /path/to/file.txt | sourcebin --secret <my-secret-here> --exipration <year|month|day|hour|minute>
```

<img src="http://recordit.co/CypsRme8lv.gif">

You can download and install this cli tool in [this repo](https://github.com/tahtaciburak/sourcebin-client).

## Installation

This application created with basically nodejs and mysql so you can run this codebase which platform do you want. All development and deployment stages tested on Ubuntu 18.04 and MacOS X. We provide a shellscript that makes your installation process easier. You can run following command to install sourcebin on your local machine. 

```
chmod +x install_sourcebin.sh
sudo ./install_sourcebin.sh
```

All tests done under Linux and MacOS environment but you can also install on a Windows system. 


