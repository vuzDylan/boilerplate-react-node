import sys
import os

args = sys.argv

if len(args) == 2:
    with open(os.path.abspath('.') + "/app/js/actions/" + args[1] + ".js", "w+") as file:
        n = raw_input('Enter action name or q to exit > ')
        actions = {}
        while True:
            if n in ['q', 'Q']:
                break
            m = raw_input('Enter data types or leave blank > ')
            actions[n] = m.split(' ')
            n = raw_input('Enter action name or q to exit > ')

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
            file.write(data)
            file.write("  };\n")
            file.write("}\n\n")

