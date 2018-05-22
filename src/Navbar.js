import React, { Component } from 'react';

var Title = 'Meme';
var navbarItems = [
    {
        'name': '教程',
        'link': '/'
    }
];
var menuName = '选择其它梗';
var templateList = [
    {
        'name': '请期待',
        'link': '/'
    }
]
var sourceInfo = {
    'name': '源码',
    'link': 'https://github.com/WincerChan/Meme-generator'
}
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-spaced has-shadow is-white" aria-label="dropdown navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://www.itswincer.com">
                        {Title}
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        {navbarItems.map(item =>
                            <a className="navbar-item" href={item.link}>{item.name}</a>
                        )}
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="/">
                                {menuName}
                            </a>
                            <div className="navbar-dropdown is-boxed">
                                {templateList.map(item =>
                                    <a className="navbar-item" href={item.link}>{item.name}</a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-link" target="__blank" href={sourceInfo.link}>
                                        <span>{sourceInfo.name}</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;