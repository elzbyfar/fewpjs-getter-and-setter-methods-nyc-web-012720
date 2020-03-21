// Add your Circle class here

class Circle {
  constructor (radius) {
    this._radius = radius
  }
  get radius() {
    return this._radius 
  }
  get diameter() {
    return this._radius * 2
  }
  get circumference() {
    return this.diameter * Math.PI
  }
  get area() {
    return (this._radius ** 2) * Math.PI
  }

  set radius(value) {
    this._radius= value
  }
  set diameter(value) {
    this._radius = value/2
  }
  set circumference(value) {
    this._radius = (value/Math.PI)/2
  }
  set area(value) {
    this._radius = Math.sqrt((value/Math.PI))
  }
}
