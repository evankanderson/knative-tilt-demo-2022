load('ext://pack', 'pack')
k8s_kind('Service', api_version='serving.knative.dev/v1', image_json_path='{.spec.template.spec.containers[*].image}')

allow_k8s_contexts('tilt-demo-admin@tilt-demo')

pack(
  'registry.kn-tilt.majordemo.com/tilt-demo-2022',
  ignore=[
    'Tiltfile',
    'service.yaml',
    '.*',
  ],
  live_update = [
    fall_back_on(['package.json', 'build/package.json']),
    sync('.', '/workspace'),
  ],
  deps=["."],
)
k8s_yaml('service.yaml')
k8s_resource('tilt-demo', extra_pod_selectors={'serving.knative.dev/service':'tilt-demo'})
