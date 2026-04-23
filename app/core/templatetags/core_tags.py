from django import template

register = template.Library()

@register.filter
def dict_lookup(dictionary, key):
    """Get a value from a dictionary by key"""
    if isinstance(dictionary, dict):
        return dictionary.get(key)
    # If it's a queryset, find the item with matching fuel_type
    for item in dictionary:
        if getattr(item, 'fuel_type', None) == key:
            return item
    return None