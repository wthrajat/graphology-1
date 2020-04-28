/**
 * Graphology Known Methods Specs
 * ===============================
 *
 * Testing the known methods of the graph.
 */
import assert from 'assert';
import {addNodesFrom} from './helpers';

export default function knownMethods(Graph) {
  return {
    '#.toJSON': {
      'it should return the serialized graph.': function() {
        const graph = new Graph({multi: true});
        addNodesFrom(graph, ['John', 'Jack', 'Martha']);
        graph.setNodeAttribute('John', 'age', 34);
        graph.addEdgeWithKey('J->J•1', 'John', 'Jack');
        graph.addEdgeWithKey('J->J•2', 'John', 'Jack', {weight: 2});
        graph.addEdgeWithKey('J->J•3', 'John', 'Jack');
        graph.addUndirectedEdgeWithKey('J<->J•1', 'John', 'Jack');
        graph.addUndirectedEdgeWithKey('J<->J•2', 'John', 'Jack', {weight: 3});

        assert.deepEqual(graph.toJSON(), graph.export());
      }
    },

    '#.toString': {

      'it should return a useful string.': function() {
        const graph = new Graph();

        assert.strictEqual(graph.toString(), 'Graph<0 nodes, 0 edges>');
      },

      'it should handle pluralization correctly.': function() {
        const graph = new Graph();
        graph.addNode('John');

        assert.strictEqual(graph.toString(), 'Graph<1 node, 0 edges>');
      },

      'it should pretty print the numbers.': function() {
        const graph = new Graph();

        for (let i = 0; i < 1000; i++)
          graph.addNode(i);

        assert.strictEqual(graph.toString(), 'Graph<1,000 nodes, 0 edges>');
      }
    }
  };
}
