def doubler(f):

    def g(x):
        return 2 * f(x)

    return g 


def f1(x):
    return x + 1

g = doubler(f1)

assert g(3) == 8, "(3 + 1) * 2 should equal 8"
assert g(-1) == 0, "(-1 + 1) * 2 should euqal 0"