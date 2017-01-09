#What is eContract

eContract is an idea that came to mind while working with remote clients doing 
development work. With this project, I attempt to remedy a lot of the peeves 
that I have when working out an agreement.

Electronically sending signed agreements become a difficult for those not use to 
doing so. Often, when you are hired by a client, that may be the first time they 
have ever worked with remote professionals. Here is one direction this process 
may take:

You send the client an email with a file. The client must download that file. The 
client must open that file in a program that will allow them to electronically sign 
it. They must save that new file, then email it back. All while trying to overcome 
any ignorance they may have of this process.

###Solution 1:

eContract sends the contract to the client as a simple webpage that has an input field 
for a signature that can be used with mouse, touch, or pen digitizer. No need for the 
client to do anything other than click on the link sent to them, read, and agree.

###Solution 2:

eContract gets rid of the need for many tools and processes that go into digital 
agreements. All the data regarding the agreement and parties involved is saved to 
the database once submitted and can be printed immediately. With authorization, the 
same webpage can be an editor as well.

###Solution 3:

Record keeping is simplified with eContracts backend. With everything saved in the 
database there is no need to have pdf's and other documents saving information of the 
signed parties. Queries can be made from admin interface to quickly pull up any 
information needed.

##To do

As of right now, as far as the backend it concerned, only the data model is structured. 
eContract is set up to work with MongoDB using Mongoose on top of Node. After this I 
will create the admin portal for retrieving records.