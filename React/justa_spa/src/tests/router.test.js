import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

test('Verify that the path to the clients screen exists', () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/Clients" context={context}>
      <Link to="/Clients" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Verify that the path to the dashboard screen exists', () => {
  const context = {};
  const component = renderer.create(
    <StaticRouter location="/#" context={context}>
      <Link to="/#" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});