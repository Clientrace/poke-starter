
from abc import ABCMeta, abstractmethod


# Repository SucperClass
class Repository(metaclass=ABCMeta):

  @abstractmethod
  def register_user(self):
    return None



