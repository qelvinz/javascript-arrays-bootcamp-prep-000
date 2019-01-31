function addElementToBeginningOfArray(array, element)
{
  array = [element, ...array]
  array;
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}
