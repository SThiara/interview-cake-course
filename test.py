def random_function():
  test = [x for x in range(5)]
  test2 = test[1:4]
  test3 = ''
  for item in test2:
    test3 += f'{str(item)}, '
  
  print(test3[0:-2])

random_function()
  

class Test:
  def __init__(self, data):
    self.__data = data

  def getData(self):
    return self.__data

  def setData(self, data):
    self.__data = data
  
  def add(self, addition):
    self.__data += addition
  
  def sub(self, subtraction):
    self.__data -= subtraction

test_obj = Test(5)
print(test_obj.getData())
test_obj.add(5)
print(test_obj.getData())
test_obj.setData(5)
print(test_obj.getData())


  
