# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

`React is a declarative JS library that introduces logical concepts that lend themselves to creating reusable and composable code, and that solve the issues of the imperative JS past.`

1. What does it mean to think in react?

`To think in React is to think about development in terms of breaking down UI into logical units--i.e. components--and then to determine how application state should be affecting those components, where that state shoud live, and how it should travel.`

1. Describe state.

`State is the data, the information, of your application. In React, state is what drives and determines the rendering of your UI, and so introduces a "state to UI" declarative relationship.` 

1. Describe props.

`Props are close to function arguments/parameters, but for components. Props allow you to pass data into any given component, and that component in turn uses that data to render correctly.`

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

`Side effects are processes running outside of the React lifecycle, such as network requests and event listeners. Side effects can be synced using the useEffect hook by writing the effect code as a callback to useEffect.`
