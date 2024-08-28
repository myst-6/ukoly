#
# Hard-coded mapping between letter and the corresponding pentomino matrix
#
pentominoes = {
    "F": [
        [0, 1, 1],
        [1, 1, 0],
        [0, 1, 0]
    ],
    "G": [
        [1, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    "I": [
        [1],
        [1],
        [1],
        [1],
        [1],
    ],
    "L": [
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 1]
    ],
    "J": [
        [0, 1],
        [0, 1],
        [0, 1],
        [1, 1]
    ],
    "N": [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, 0]
    ],
    "M": [
        [1, 0],
        [1, 1],
        [0, 1],
        [0, 1]
    ],
    "P": [
        [1, 1],
        [1, 1],
        [1, 0]
    ],
    "Q": [
        [1, 1],
        [1, 1],
        [0, 1]
    ],
    "T": [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    "U": [
        [1, 0, 1],
        [1, 1, 1]
    ],
    "V": [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1]
    ],
    "W": [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    "X": [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    "Z": [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    "S": [
        [0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]
    ],
    "Y": [
        [0, 1],
        [1, 1],
        [0, 1],
        [0, 1]
    ],
    "A": [
        [1, 0],
        [1, 1],
        [1, 0],
        [1, 0]
    ]
}
s1, s2 = tuple(list(input()))
CANVAS_SIZE = 10
EMPTY_CELL = 0
canvas = [[EMPTY_CELL for _ in range(CANVAS_SIZE)] for __ in range(CANVAS_SIZE)]


def draw_shape(shape: list[list[int]], ox: int, oy: int, cell_fill: int) -> bool:
    """
    Draws shape on the canvas
    :param shape: matrix of integers describing pattern of cells to fill
    :param ox: x coord of top left corner of shape on the canvas
    :param oy: y coord of top left corner of shape on the canvas
    :param cell_fill: the number to write on the canvas element if pattern indicates a filled cell
    :return: True if drawn with no overlap encountered,
             False if overlap encountered (a cell to be filled by the current shape is not an empty cell)
    """
    for y in range(len(shape)):
        for x in range(len(shape[0])):
            if shape[y][x] == 0:
                continue
            if canvas[oy + y][ox + x] != EMPTY_CELL:
                return False
            canvas[oy + y][ox + x] = cell_fill
    return True


def check_touching() -> bool:
    """
    Checks the pentominoes touch edge-to-edge in at least one place.
    Can be verified if there are two adjacent non-empty elements that are different
    :return: True if there is at least one square that meets edge-to-edge with a square from the other shape,
             False otherwise
    """
    for y in range(CANVAS_SIZE):
        for x in range(CANVAS_SIZE):
            if canvas[y][x] == EMPTY_CELL:
                continue
            if x > 0 and canvas[y][x] != canvas[y][x - 1] and canvas[y][x - 1] != EMPTY_CELL:
                return True
            if x < CANVAS_SIZE - 1 and canvas[y][x] != canvas[y][x + 1] and canvas[y][x + 1] != EMPTY_CELL:
                return True
            if y > 0 and canvas[y][x] != canvas[y - 1][x] and canvas[y - 1][x] != EMPTY_CELL:
                return True
            if y < CANVAS_SIZE - 1 and canvas[y][x] != canvas[y + 1][x] and canvas[y + 1][x] != EMPTY_CELL:
                return True
    return False


def trim_and_export_canvas() -> list[list[int]]:
    """
    :return: A copy of the canvas with empty cells around the edges of the new shape
        and with all non-empty cells identical, a single distinguishable shape
    """
    left, right, up, down = CANVAS_SIZE, -1, CANVAS_SIZE, -1
    for y in range(CANVAS_SIZE):
        for x in range(CANVAS_SIZE):
            if canvas[y][x] != EMPTY_CELL:
                left = min(left, x)
                right = max(right, x)
                up = min(up, y)
                down = max(down, y)
    res = []
    for y in range(up, down + 1):
        res.append([])
        for x in range(left, right + 1):
            res[-1].append(canvas[y][x])
    for y in range(len(res)):
        for x in range(len(res[0])):
            if res[y][x] != EMPTY_CELL:
                res[y][x] = 1
    return res


def hash_shape(shape: list[list[int]]) -> str:
    """
    :param shape: shape to be hashed
    :return: A string representation of the shape matrix, so it can be stored in a Python set
    """
    res = ""
    for y in range(len(shape)):
        for x in range(len(shape[0])):
            res += str(shape[y][x])
        res += "\n"
    return res


def clear_canvas():
    """
    Overwrites all cells to EMPTY_CELL
    :return: None
    """
    for y in range(CANVAS_SIZE):
        for x in range(CANVAS_SIZE):
            canvas[y][x] = EMPTY_CELL


resulting_shapes = set()

#
# Iterating over all origin coordinates (coordinates of the top-right corner) for both shapes such that cells are not drawn outside the boundary of the canvas
#
for o1x in range(CANVAS_SIZE - len(pentominoes[s1][0]) + 1):
    for o1y in range(CANVAS_SIZE - len(pentominoes[s1]) + 1):
        for o2x in range(CANVAS_SIZE - len(pentominoes[s2][0]) + 1):
            for o2y in range(CANVAS_SIZE - len(pentominoes[s2]) + 1):
                clear_canvas()
                draw_shape(pentominoes[s1], o1x, o1y, 1)
                ret: bool = draw_shape(pentominoes[s2], o2x, o2y, 2)
                if not ret:
                    continue
                if not check_touching():
                    continue
                complete_shape: list[list[int]] = trim_and_export_canvas()
                resulting_shapes.add(hash_shape(complete_shape))

print(len(resulting_shapes))
