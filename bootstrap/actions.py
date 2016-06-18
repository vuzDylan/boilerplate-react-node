import sys
import os

args = sys.argv

if len(args) == 2:
    with open(os.path.abspath('.') + "/app/js/actions/" + args[1] + ".js", "w+") as file:
        print("Enter actions as 'action name - data attr'")
        print("This will create actionName(data, attr)")
        print("q or Q to create file")
        n = raw_input('> ')
        actions = {}
        while True:
            if n in ['q', 'Q']:
                break
            if '-' in n:
                action = n.split('-')[0]
                data = n.split('-')[1].lstrip().split(' ')
            else:
                action = n.lstrip()
                data = []
            actions[action] = data
            n = raw_input('> ')

        file.write("'use strict';\n\n")
        for key, val in actions.iteritems():
            action = '_'.join(key.upper().split(' '))
            file.write("export const " + action + " = " + "'" + action +  "';\n")
        file.write("\n")

        for key, val in actions.iteritems():
            action = '_'.join(key.upper().split(' '))
            name = key.split(' ')[0] + ''.join((' '.join(key.split(' ')[1:]).title()).split(' '))
            args = ", ".join(val)
            data = '\n'.join(['    ' + x for x in args.split(' ') ]) + ",\n"
            file.write("export function " + name + "(" + args + ") {\n")
            file.write("  return {\n")
            file.write("    type: " + action + ",\n")
            if val and val[0]:
                file.write(data)
            file.write("  };\n")
            file.write("}\n\n")
else:
    print("arg - action file name")
