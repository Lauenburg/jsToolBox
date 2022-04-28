# h5

This folder contains two samples for how load and process a 3D image volume, saved as an hdf5 file, on the client side.
The samples are based on the library [jsfive](https://github.com/usnistgov/jsfive) and [numjs](https://github.com/nicolaspanel/numjs).

**jsh5.js**

Sample code that loads a 3D image volume of dimension 20x1400x700 (z,y,x) from an h5 file and cuts an 124x124 2D image slice, at position z=10, y0=0, y1=124, x0=0, x1=124, from the volume. The 3D volume is stored in the h5 file under the key 'main'. The implementation does not use a callback function. Accordingly the file can only be accessed inside the function.

**jsh5_callback.js**

Same as `jsh5.js` but with callback function. The callback provides more flexibility and makes the h5 file available outside the async function.

## Setup

- Adapt the key value to match your h5 file. 
- Adapt the volume dimensions.
- Start a web server running, e.g., `python3 -m http.server`
- Go to `http://localhost:8000/`

