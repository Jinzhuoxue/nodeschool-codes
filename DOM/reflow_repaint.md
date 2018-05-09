#What are reflows and repaints and how to avoid them
Its becoming increasingly common for the topic of reflows and repaints to come up when talking about improving page performance. Although the two of them are closely related, they differ in terms of the impact each can have on browser performance.

#Repaint
A repaint occurs when you change the styling of an element such that it does not effect its layout. For e.g. When you change the background color or outline etc.

Causes of repaints
In essence, anything that causes the visual appearance of a DOM node to change causes a repaint of that particular dom node and more than likely all of its children. Some of the causes or repaints are

Scrolling: When you scroll, the browser has to redraw the pixels at the place that you scrolled. This is one is not as easily avoidable.
Changing visibility or colors or background colors.

#Reflow
A reflow primarily occurs when the layout of an element changes. It causes the browser to recompute the dimensions and positioning of the parent and child nodes and sometimes even ancestors and siblings. Browser implementations differ in the way they optimize for reflows.

The most important point to be aware of in this discussion is

A reflow is a user-blocking operation. It consumes relatively higher CPU time and will result in a degraded user experience on a mobile device if it happens to often.

Causes of reflows
As a rule of thumb – anything that affects the current ‘flow’ of elements in the page will trigger a reflow. Some of the causes of reflows are

Resizing the window
Moving your mobile device(tablet/phone) from landscape to portrait mode and vice versa.
Changing the font size
Calculating offsetWidth and offsetHeight
Changing the height, width, positions
Changing inline styles
Using JavaScript methods involving computed styles
Adding/removing elements from the dom
In most cases, reflows are followed by a repaint.

#Ways to minimize reflows and repaints
DOM operations involving animations should preferable done out of the flow using – position absolute or fixed.
Change classes at the lowest levels in the DOM tree.
Avoid using inline style. Aside from that, not only are they a nightmare to maintain, they also increase amount of markup to be delivered(if you are doing server side render).
Avoid tables for layout. Because the content of any cell in a table can impact the dimensions of another cell in the table, it causes multiple passes to be rendered. Therefore almost any change to a table can cause reflows.
Whenever possible if new nodes are to be added to the DOM, batch together operations that manipulate them before inserting them into the DOM.
When reading computed styles like offsetWidth and offsetHeight, don’t interleave them with a write to those properties. e.g. If you already retrieved a node.offsetHeight, batch all other such read operations until you write to the dom again. Thats because consecutive reads on computed styles will not trigger a reflow.
Debounce the window resize event handler, if any.
Let me know in the comments if you’d like me to add any more points to this article and I will be more than willing to update it.

Refer:https://javascript.tutorialhorizon.com/2015/06/06/what-are-reflows-and-repaints-and-how-to-avoid-them/
