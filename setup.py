import os
import shutil
from distutils.core import setup

from setuptools import find_packages

package_name = "peek-server-fe"
package_version = '0.0.6dev123456'

egg_info = "%s.egg-info" % package_name
if os.path.isdir(egg_info):
    shutil.rmtree(egg_info)


def package_files(excludeDirs=('__pycache__','node_modules'),
                  excludeFiles=('.pyc', '.js', '.js.map')):
    paths = []
    for (path, directories, filenames) in os.walk(package_name):
        if [e for e in excludeDirs if e in path]:
            continue

        for filename in filenames:
            if [e for e in excludeFiles if e in filename]:
                continue

            paths.append(os.path.join(path[len(package_name) + 1:], filename))

    return paths

setup(
    name=package_name,
    packages=find_packages(exclude=["*.tests", "*.tests.*", "tests.*", "tests"]),
    package_data={'': package_files()},
    install_requires=[],
    version=package_version,
    description='Peek Platform - Server Service (Frontend)',
    author='Synerty',
    author_email='contact@synerty.com',
    url='https://github.com/Synerty/%s' % package_name,
    download_url='https://github.com/Synerty/%s/tarball/%s' % (
        package_name, package_version),
    keywords=['Peek', 'Python', 'Platform', 'synerty'],
    classifiers=[
        "Programming Language :: Python :: 3.5",
    ],
)
