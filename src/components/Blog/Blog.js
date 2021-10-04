import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Blog.css"

const Blog = () => {
    const blogposts = [
        {
            "name": "Designing Beautiful Shadows in CSS",
            "address": "When I look around the web, most of the shadows I see are fuzzy grey boxes. It doesn't have to be this way, though! CSS gives us the tools to create rich, lush, lifelike shadows. In this tutorial, I'll show you how."
        },
        {
            "name": "An Interactive Guide to Keyframe Animations",
            "address": "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations."
        },
        {
            "name": "The World of CSS Transforms",
            "address": "The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do."
        },
        {
            "name": "How To Learn Stuff Quickly",
            "address": "As software developers, we're always learning new things; it's practically the whole gig! If we can learn to quickly pick up new languages/frameworks/tools, we'll become so much more effective at our job. It's sort of a superpower."
        },
        {
            "name": "Demystifying styled-components",
            "address": "For so many React devs, styled-components seems kinda magical. It isn't at all clear how it uses traditional CSS features under-the-hood, and that lack of clarity can cause real problems when things go awry. In this post, we'll learn exactly how styled-components works by building our own mini-version."
        },
        {
            "name": "How I Built My Blog",
            "address": "An in-depth look at the technical stack behind this very blog! We'll see how I use Next's API routes to implement my hit and like counters, how I use MDX to add interaction and customization, and how I organize my codebase, among others."
        },
        {
            "name": "Building a Magical 3D Button",
            "address": "Every action we take on the web starts with a button click, and yet most buttons are ho-hum and uninspired. In this tutorial, we'll build an animated 3D button with HTML and CSS that sparks joy."
        },
        {
            "name": "The Importance of Learning CSS",
            "address": "I know so many super-talented developers who share the same achilles heel: CSS. Instead of trying to “outrun” CSS, this article explores why leaning in and going deeper can be a tremendous boon for your development life and your career."
        },
        {
            "name": "An Interactive Guide to CSS Transitions",
            "address": "This comprehensive guide shows how to use CSS transitions! A back- to - basics look at the fundamental building blocks we need to create microinteractions and other animations."
        },
        {
            "name": "Refreshing Server-Side Props",
            "address": "Next allows you to do server-side data-fetching, but what happens when that data needs to change on the client? This brief tutorial shows how to re-fetch the props without doing a full server reload."
        },
        {
            "name": "The Rules of Margin Collapse",
            "address": "Margin collapse” has a dastardly reputation, one of the trickier parts of CSS. Fortunately, it gets a lot easier once you learn a few rules! In this tutorial, we take a deep dive into the governing principles, and learn how to use them to our advantage."
        },
        {
            "name": "A whimsical twist on hover transitions",
            "address": "An in-depth tutorial that teaches how to create one of the most adorable interactions I've ever created. We'll learn how to use React components and hooks to abstract behaviours, and see how to design the perfect API. Even if you're not into animations, I think you'll find it interesting!"
        },
        {
            "name": "Chasing the Pixel-Perfect Dream",
            "address": "Is it possible to create an implementation of a design that matches to-the-pixel? Well, not really, but that shouldn't discourage us! In this article, I'll show how I became designers' best friend by leveraging a series of tricks to get my implementation looking near-pixel-perfect."
        },
        {
            "name": "An elegant solution to a tricky modern layout",
            "address": "Certain layouts are surprisingly dastardly. On the modern web, one of the most common layouts is also one of the trickiest. In this tutorial, I break down how to build the layout using CSS Grid."
        },
        {
            "name": "Building a Modern-Day Hit Counter",
            "address": "The 90s are cool again! Funky colors! Guestbooks! In this tutorial, we'll see how the 90s-inspired hit counter works, using modern web tools like serverless functions, FaunaDB, and React."
        }
    ]
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Our Blogs</h1>
            <Row xs={1} md={3} className="g-4">
                {blogposts.map(blog => (
                    <Col>
                        <Card className="shadow p-3 bg-white rounded h-100 text-start blogedit">
                            {/* <Card.Img variant="top" src={img} /> */}
                            <Card.Body>
                                <Card.Title> <h4>{blog.name}</h4> </Card.Title>
                                <Card.Text className="textp">
                                    <p>{blog.address}</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg bg-white">
                                <button className="btn btn-warning"><span className="ms-2">READ MORE</span></button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Blog;