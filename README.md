# Knative Tilt Demo, February 2022

This is a sample Node.js + Express + React application, written in Typescript, to demonstrate the power of Tilt with Knative Serving.

See the [Slides](slides.pdf) from the talk for more details.

## Additional links in the slides:

* [Buildpacks](https://buildpacks.io) simplify the process of building container images from source code across multiple languages. (Tools such as `ko` or `jib` work well for specific languages, but don't work for other languages.)

* [On-Cluster Registry](https://github.com/evankanderson/k8s-private-local-registry) is a huge hack for running a registry on your local cluster. It's a work-in-progress, and only works on Kubernetes clusters where the nodes have access to ClusterDNS and ClusterIPs.
