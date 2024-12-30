# name = " mehul: "
# age = 20
# if  age > 19:
#   print ( f"you are elagable for vote {age}" )
# else :
#     print ( f"you are not elagable for vote {age} ")

'''for loop'''
# fruits = ["apple", "banana", "cherry"]
# for fruit in fruits:
#       print(fruit)


# fruits = ["apple", "banana", "cherry"]
# x, y, z = fruits
# print(z,y ,x)  # output: cherry banana apple
# the example of global varaible 

# x=3 
# def myfun ():
#    print (f" the value of x : {x} ")

# myfun()

# y = 4 
# def mehul () :
#     global y 
#     y = 56 
#     print (f" the value of y : {y} ")
    
    
# mehul()

name = "mehul"
print(f"frist name : {name}" )
def myfunc(): 
    global name 
    name =  "kumar"
    print (f"last name : {name}") 
  
myfunc()

def myfunc2 ():
    global name 
    name = "sain"
    print (name )
    
myfunc2()
my_list = [1, 2, 3, 4, 5]
print(my_list)
my_list[0] = 23
print (my_list)
my_list.append('2,22')
print (type(my_list))

# it is lambda function
# add  = lambda x , y : x + y
# print (add (10, 20)) 

'''lambda function with map method '''

# number = [1,2,3,4,5,6]
# squared_number = list(map(lambda x: x** 2, number))
# print (squared_number)
# number= [1,2,3,5,6,7,8,9]
# squareofnumber = list (map (lambda x: x **2 ,number))
# print(squareofnumber)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

# p1 = Person("John", 36)

# print(p1.name)
# print(p1.age)
'''In Python, you cannot have multiple __init__ methods in the same class. The __init__ method is a special method used to initialize a new instance of a class, and a class can only have one __init__ method.'''
class Person :
    def __init__(self,name= "UnKnown",age = 0):
        self.name = name 
        self.age = age
         
p1 = Person("petter", 25)
 
p2 = Person ( age = 30)
p2 = Person ("Jhonee" )
print(p1.name, p2.name)
print(p1.age , p2.age)
