import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if diameter is not None:
            self.radius = diameter / 2
        elif radius is not None:
            self.radius = radius
        else:
            raise ValueError("One of 'radius' or 'diameter' must be provided.")

    # Get the diameter of the circle.
    @property
    def diameter(self):
        return self.radius * 2
    
    # Set the diameter of the circle and update the radius.
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    # Get the area of the circle.
    @property
    def area(self):
        return math.pi * (self.radius ** 2)
    
    # Return a string representation of the circle.
    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    # Add two circle instances by summing their radii.
    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)
    
    # Compare two Circle instances for equality of their radii.
    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius
    
    # Compare two Circle instances to determine if one is smaller than the other.
    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius
    
    # Compare two Circle instances to determine if one is smaller than or equal to the other.
    def __le__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius <= other.radius
    

# Example usage
if __name__ == "__main__":
    c1 = Circle(5)
    c2 = Circle(10)

    # print circle details
    print(f"Circle 1: {c1}")
    print(f"Circle 2: {c2}")

    # Calculate and print the area of circle 1
    print(f"Area of Circle 1: {c1.area}")

    # Add circle 1 and circle 2
    c3 = c1 + c2
    print(f"Circle 3: {c3}")

    # Compare circle 1 and circle 2
    print(f"Circle 1 == Circle 2: {c1 == c2}")
    print(f"Circle 1 < Circle 2: {c1 < c2}")

    # Sorting circles by radius
    circles = [c1, c2, c3]
    circles.sort()
    print("Circles sorted by radius:", circles)  