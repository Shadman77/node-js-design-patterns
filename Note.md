# Singleton

Ensure a class only has one instance and provide a global point of access to it.
ch2->1,2,3

Basically the object is instantiated only once. A common example can be a database connector.

# Object Creational: Prototype

Specify the kind of objects to create using prototypical instance, and create new objects by copying this prototype.
ch2->4,5

Simply copying a object then setting some properties instead of having to instantiate is from scratch.

# Class Creational: Factory Method

Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Methods lets a class defer instantiation to subclasses.
ch2->6

A method which is used to create object of different classes based on the parameters passed to the method.

# Object Creational: Builder

Seperate the construction of a complex object from its representation so that the same construction process can create different representations.
(telescopic constructor)
ch2->7,8

# Structural Pattern: Adapter

Convert the interface os a class into another clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
ch3->1,2

# Object Structural: Proxy

Provide a surrogate or placeholder for another object to control access to it.
ch3->3,4

# Object Structural: Composite

Compose objects into tree structures to represent part-whole heirarchies. Composite lets clients treat individual objects and compositions of object uniformly.
ch3->5,6

# Object Structural: Decorator

Attach additional resposibilites to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
ch3->7,8

# Object Behavioral: Chain of Responsibility

Avoid coupling the sender of a request to its reciever by giving more than one object a change to handle the request. Chain the receiving objects and pass the request along the chain.
ch4->1,2

# Object Behavioral: Command

Encapsulating a request as an object, thereby letting you parameterize with different requests, queue or log requests, and support undoable operations.
ch4->3,4,5

# Object Behavioral: Iterator

Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
ch4->6,7

# Object Behavioral: Observer

Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
ch4->8,9

# Object Behavioral: Strategy

Define a family of algorithms, encapsulating each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
ch->10,11