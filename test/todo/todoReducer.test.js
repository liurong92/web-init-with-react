import todoReducer, { INIT_TODO_LIST } from '../../src/app/todo/todoReducer';

describe('todoReducer', () => {
    let todoReducer;
    beforeEach(() => {
        todoReducer = {
            todoList: []
        }
    });

    test('should init todoReducer', () => {
        expect(cutOrdersReducer(undefined, {})).toEqual(todoReducer)
    });

    test('should init todoList', () => {
        todoReducer.todoList = [
            { name: 'item_1' },
            { name: 'item_2' },
            { name: 'item_3' },
            { name: 'item_4' }
        ];

        const result = cutOrdersReducer(todoReducer, { type: INIT_TODO_LIST });
        expect(result.todoList).toEqual(
            [
                { name: 'item_1' },
                { name: 'item_2' },
                { name: 'item_3' },
                { name: 'item_4' }
            ]
        );
    });
});
